import { Image } from "../../oneportal/components/Image"
import { PageContent } from "../../oneportal/components/PageContent"
import styled from "styled-components"
import { useAsync } from "@corets/use-async"
import { useApiClient } from "../../oneportal/hooks/useApiClient"
import { BlogParams, getAlllBlogs, getBlogsPagination } from "../services/blog"
import { formatDate } from "../../oneportal/helpers/formatDate"
import { PageSorter } from "../../oneportal/components/PageSorter"
import { useSorter } from "../../oneportal/hooks/useSorter"
import { PageLoading } from "../../oneportal/components/PageLoading"
import { PagePagination } from "../../oneportal/components/PagePagination"
import { usePagePagination } from "../../oneportal/hooks/usePagePagination"
import { PAGE_LIMIT_DEFAULT } from "../../oneportal/units/constants"
import { usePageLimit } from "../../oneportal/hooks/usePageLimit"
import { BLOG_SORT_ITEMS } from "../units/constants"
import { PageSearch } from "../../oneportal/components/PageSearch"
import { SearchAndSortContainer } from "../../oneportal/components/SearchAndSortContainer"
import { usePageSearch } from "../../oneportal/hooks/usePageSearch"
import { useNavigate } from "react-router-dom"
import { links } from "../../../config/links"

export const Blogs = () => {
  const api = useApiClient()
  const sorter = useSorter()
  const pageLimit = usePageLimit()
  const pageSearch = usePageSearch()
  const navigate = useNavigate()

  const blogList = useAsync(() => getAlllBlogs(api, pageSearch.query.search), [pageSearch.query.search])

  const pagination = usePagePagination({
    pageCount:
      (blogList.getResult()?.length || 0) % (pageLimit.query.limit || PAGE_LIMIT_DEFAULT) !== 0
        ? (blogList.getResult()?.length || 0) / (pageLimit.query.limit || PAGE_LIMIT_DEFAULT) + 1
        : (blogList.getResult()?.length || 0) / (pageLimit.query.limit || PAGE_LIMIT_DEFAULT),
  })

  const blogParams: BlogParams = {
    orderBy: sorter.query.orderBy,
    sortBy: sorter.query.sortBy,
    page: pagination.query.page,
    limit: pageLimit.query.limit,
    search: pageSearch.query.search,
  }

  const blogsPagination = useAsync(() => getBlogsPagination(api, blogParams), [JSON.stringify(blogParams)])

  return (
    <PageContent pageTitle="Post list">
      <SearchAndSortContainer>
        <PageSearch {...pageSearch.bind()} searchValue={pageSearch.query.search || undefined} />
        <PageSorter items={BLOG_SORT_ITEMS} query={sorter.query} {...sorter.bind()} />
      </SearchAndSortContainer>

      {blogsPagination.isRunning() && <PageLoading />}
      {!blogsPagination.isRunning() && blogsPagination.getResult()?.length ? (
        <List className="list-unstyled">
          {blogsPagination.getResult()?.map((item) => (
            <ListItem
              key={item.id}
              className="media"
              onClick={() => navigate(links.blog.blogDetail(item.id.toString()))}
            >
              <CustomImage src={item.image} alt="123" />
              <div className="media-body">
                <h5 className="mt-0 mb-1">{item.title}</h5>
                {item.content}
                <p>{formatDate(item.createdAt)}</p>
              </div>
            </ListItem>
          ))}
        </List>
      ) : null}
      {!!pagination.pageCount ? (
        <PagePagination
          page={pagination.query.page}
          pageCount={parseInt(pagination.pageCount.toString())}
          pageLimit={pageLimit.query.limit}
          {...pagination.bind()}
          {...pageLimit.bind()}
        />
      ) : null}
    </PageContent>
  )
}

const List = styled.ul`
  border: 1px solid #f8f9fa;
  border-radius: 5px;
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
`

const ListItem = styled.li`
  padding: 20px;
  cursor: pointer;
  opacity: 0.8;

  img {
    margin-right: 10px;
  }

  &:hover {
    opacity: 1;
    background-color: #f0f2f5;
  }
`

const CustomImage = styled(Image)`
  height: 65px;
  width: 65px;
`

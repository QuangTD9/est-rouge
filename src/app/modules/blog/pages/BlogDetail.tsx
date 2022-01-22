import { useAsync } from "@corets/use-async"
import { useNavigate, useParams } from "react-router-dom"
import { useApiClient } from "../../oneportal/hooks/useApiClient"
import { getBlogById } from "../services/blog"
import styled from "styled-components"
import { PageLoading } from "../../oneportal/components/PageLoading"
import { formatDate } from "../../oneportal/helpers/formatDate"
import { Image } from "../../oneportal/components/Image"
import { BackIcon } from "../../../assets/images"

export const BlogDetail = () => {
  const api = useApiClient()
  const navigate = useNavigate()

  const { blogId } = useParams<{
    blogId: string
  }>()

  const blogInfo = useAsync(() => getBlogById(api, blogId), [blogId])

  return (
    <div className="card">
      <div className="card-header">Blog detail</div>
      {blogInfo.isRunning() && <PageLoading />}
      {!blogInfo.isRunning() && (
        <div className="card-body">
          <CardContent>
            <div>
              <p>Title:</p>
              <p>Content:</p>
              <p>Created at:</p>
              <p>Image:</p>
            </div>
            <div>
              <p>{blogInfo.getResult()?.title}</p>
              <p>{blogInfo.getResult()?.content}</p>
              <p>{formatDate(blogInfo.getResult()?.createdAt)}</p>
              <CustomImage src={blogInfo.getResult()?.image || ""} />
            </div>
          </CardContent>

          <button className="btn btn-primary mt-3" onClick={() => navigate(-1)}>
            <BackIcon />
            Back
          </button>
        </div>
      )}
    </div>
  )
}

const CardContent = styled.div`
  display: flex;
  gap: 30px;
`

const CustomImage = styled(Image)`
  max-width: 200px;
`

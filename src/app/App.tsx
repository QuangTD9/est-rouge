/* eslint-disable react-hooks/exhaustive-deps */
import { HelmetProvider } from "react-helmet-async"
import { Routes, Route, useLocation, useNavigate } from "react-router-dom"
import { links } from "./config/links"
import { MainLayout } from "./modules/oneportal/layouts/MainLayout"
import { Blogs } from "./modules/blog/pages/Blogs"
import { useEffect } from "react"
import { DependencyInjectionProvider } from "./modules/oneportal/contexts/DependencyInjectionProvider"
import { PageNotFound } from "./modules/oneportal/components/PageNotFound"
import { BlogDetail } from "./modules/blog/pages/BlogDetail"

export const App = () => {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (location.pathname === links.home.dashboard()) {
      navigate(links.blog.blogs())
    }
  }, [])

  return (
    <HelmetProvider>
      <DependencyInjectionProvider>
        <MainLayout>
          <Routes>
            <Route path={"*"} element={<PageNotFound />} />
            <Route path={links.blog.blogs()} element={<Blogs />} />
            <Route path={links.blog.blogDetail()} element={<BlogDetail />} />
          </Routes>
        </MainLayout>
      </DependencyInjectionProvider>
    </HelmetProvider>
  )
}

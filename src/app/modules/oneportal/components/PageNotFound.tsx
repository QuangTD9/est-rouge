import { SadFace } from "../../../assets/images"
import styled from "styled-components"
import { useNavigate } from "react-router-dom"
import { links } from "../../../config/links"

export const PageNotFound = () => {
  const navigate = useNavigate()
  return (
    <Root>
      <SadFace />
      <h3>Page Not Found!</h3>
      <button type="button" onClick={() => navigate(links.blog.blogs())} className="btn btn-secondary">
        Back to home
      </button>
    </Root>
  )
}

const Root = styled.div`
  height: 80vh;
  flex-direction: column;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`

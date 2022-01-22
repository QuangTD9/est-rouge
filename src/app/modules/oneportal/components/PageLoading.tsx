import styled from "styled-components"

export const PageLoading = () => {
  return (
    <Root>
      <CustomSninner className="spinner-border text-secondary" role="status">
        <span className="sr-only">Loading...</span>
      </CustomSninner>
    </Root>
  )
}

const Root = styled.div`
  text-align: center;
  height: 300px;
`

const CustomSninner = styled.div`
  height: 50px;
  width: 50px;
`

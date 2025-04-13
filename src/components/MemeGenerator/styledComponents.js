import styled from 'styled-components'

export const MemeGeneratorContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  min-height: 100vh;
  font-family: 'Open Sans';
  background-color: #ffffff;
  padding: 40px;
`

export const MemeForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 350px;
`

export const MemeHeading = styled.h1`
  color: #35469c;
  font-size: 28px;
  margin-bottom: 20px;
`

export const MemeLabel = styled.label`
  color: #5a7184;
  font-size: 14px;
  margin-top: 10px;
`

export const MemeInput = styled.input`
  padding: 8px;
  margin-top: 5px;
  border: 1px solid #d7dfe9;
  border-radius: 4px;
  outline: none;
  color: #1e293b;
`

export const MemeSelect = styled.select`
  padding: 8px;
  margin-top: 5px;
  border: 1px solid #d7dfe9;
  border-radius: 4px;
  color: #1e293b;
`

export const MemeButton = styled.button`
  background-color: #0b69ff;
  color: #ffffff;
  padding: 10px;
  margin-top: 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`

export const MemeDisplay = styled.div`
  width: 400px;
  height: 400px;
  background-image: url(${props => props.bgImage});
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  text-align: center;
`

export const MemeText = styled.p`
  color: #ffffff;
  font-size: ${props => props.fontSize}px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
`

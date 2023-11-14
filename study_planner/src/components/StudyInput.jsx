import styled from "styled-components";
const StyledInput = styled.input`
  width: 600px;
  height: 30px;
  padding: 10px 8px;
  outline: none;
  border: none;
  background-color: #ddd;
`;
const StudyInput = () => {
  return (
    <div className="studyInput">
      <div>X</div>
      <div className="subjectMenu">과목</div>
      <div className="studyInputBox">
        <StyledInput name="td_content" type="text" placeholder="content" />
      </div>
      <div className="studyPlus">추가</div>
    </div>
  );
};
export default StudyInput;

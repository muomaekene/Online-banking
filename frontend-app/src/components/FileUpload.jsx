import styled from "styled-components";

const FileUpload = () => {
  return <Input type="file" id="file-upload" />;
};

export default FileUpload;

const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.palette.border};
  border-radius: ${({ theme }) => theme.borderRadius[1]};

  ::file-selector-button {
    background-color: ${({ theme }) => theme.palette.main};
    color: ${({ theme }) => theme.palette.text};
    border: 0px;
    border-right: 1px solid ${({ theme }) => theme.palette.border};
    padding: 15px 20px;
    margin-right: 20px;
    transition: 0.2s;
  }

  ::file-selector-button:hover {
    background-color: ${({ theme }) => theme.palette.focus};
    border: 0px;
    border-right: 1px solid ${({ theme }) => theme.palette.border};
  }
`;

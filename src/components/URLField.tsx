import styled from "@emotion/styled";

import Button from "./Button";

const Container = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 40px;
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 1);
  transition: background-color 0.1s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.9);
  }
`;

const Field = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 40px;
  padding: 0 10px;
  font-size: 16px;
  font-weight: 500;
  font-family: Roboto;
  background-color: transparent;
  outline: none;
  border: none;

  color: rgba(0, 0, 0, 0.8);
`;

const CopyButtonContainer = styled.div`
  position: absolute;
  top: 0;
  right: 6px;
  bottom: 0;
  display: flex;
  align-items: center;
  z-index: 1;
`;

const URLField = ({
  url,
  enableClipboard,
  onClipboardClick,
}: {
  url: string;
  enableClipboard: boolean;
  onClipboardClick: () => void;
}) => {
  return (
    <Container>
      {enableClipboard && (
        <CopyButtonContainer>
          <Button primary icon="copy" onClick={onClipboardClick} />
        </CopyButtonContainer>
      )}

      <Field
        value={url}
        readOnly
        onClick={(e) => {
          e.stopPropagation();

          const target = e.target as HTMLInputElement;
          target.focus();
          target.setSelectionRange(0, target.value.length);
        }}
      />
    </Container>
  );
};

export default URLField;

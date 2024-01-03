import { Box, styled } from "@mui/material";
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";
import { Controlled as ControlledEditor } from "react-codemirror2";
import { useState } from "react";

import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";

import "../App.css";

const BoxContainer = styled(Box)`
  flex-grow: 1;
  flex-basic: 0;
  display: flex;
  flex-direction: column;
  padding: 0 2px 1.5px 1.5px;
`;

const Heading = styled(Box)`
  background: #1d1e22;
  display: flex;
  padding: 9px 12px;
`;

const Header = styled(Box)`
  display: flex;
  background: #060606;
  color: #aaaebc;
  justify-content: space-between;
  font-weight: 700;
  color: #fff;
`;

const Editor = (props) => {
  
  const [open, setOpen] = useState(true);

  const handleChange = (editor, data, value) => {
    props.onChange(value);
  };

  return (
    <BoxContainer style={open ? null : { flexGrow: 0 }}>
      <Header>
        <Heading>
          <Box
            component="span"
            style={{
              background: props.bgColor,
              height: 20,
              width: 20,
              display: "flex",
              placeContent: "center",
              borderRadius: 5,
              marginRight: 5,
              paddingBottom: 2,
              color: "black",
            }}
          >
            {props.symbol}
          </Box>
          {props.title}
        </Heading>
        <CloseFullscreenIcon
          fontSize="small"
          style={{ alignSelf: "center" }}
          onClick={() => setOpen((prevState) => !prevState)}
        />
      </Header>
      <ControlledEditor
        className="controlled-editor"
        value={props.value}
        onBeforeChange={handleChange}
        options={{
          mode: "xml",
          theme: "material",
          lineNumbers: true,
        }}
      />
    </BoxContainer>
  );
};

export default Editor;

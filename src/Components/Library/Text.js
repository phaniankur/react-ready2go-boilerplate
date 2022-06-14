import Box from "./Box";

export const Text = (props) => {
    return (
      <Box
        as={props.as || "p"}
        m='0'
        p='0'

        {...props}
      >
        {props.children}
      </Box>
    );
  };
import { Image } from "@chakra-ui/image";
import { Text } from "@chakra-ui/layout";
import { Stack } from "@chakra-ui/layout";
import { Heading } from "@chakra-ui/layout";
import { Flex } from "@chakra-ui/layout";
import { Box } from "@chakra-ui/layout";
import { Tag } from "@chakra-ui/tag";

const Post = ({ href, image, title, description, tags = [] }) => {
  return (
    <Box
      as="a"
      href={href}
      target="_blank"
      p={4}
      borderWidth="1px"
      borderRadius="lg"
      shadow="md"
    >
      <Flex>
        <Image borderRadius="lg" w={"44"} src={image} />
        <Box ml={2}>
          <Heading size="sm">{title}</Heading>
          <Text mt={2} noOfLines={3}>
            {description}
          </Text>
        </Box>
      </Flex>
      <Flex mt={4}>
        {tags.map((tag) => (
          <Tag mr={1} size="sm" colorScheme="red">
            {tag}
          </Tag>
        ))}
      </Flex>
    </Box>
  );
};

export default () => {
  return (
    <Box mt={12} mb={12}>
      <Heading mb={4}>Recent Posts</Heading>
      <Stack spacing={4} _hover={{ cursor: "pointer" }}>
        <Post
          href="https://xen.codes/dark"
          title="The Dark Side of Web Development"
          description="A complete web development series covering all aspects of the development process."
          image="/assets/dark-logo.png"
          tags={["html", "css", "js", "node.js"]}
        />
        <Post
          href="https://www.youtube.com/playlist?list=PL2guVjsa6dz9yd8ChqIQUg20I7WHXevyx"
          title="Hello React"
          description="Learn full stack development using React JS and a backend server."
          image="/assets/full-stack-react.png"
          tags={["html", "reactjs", "node.js"]}
        />
      </Stack>
    </Box>
  );
};

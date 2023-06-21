import { Flex, Text, Box, LinkBox, LinkOverlay } from '@chakra-ui/layout';
import Icon from '@chakra-ui/icon';
import { Meta } from '../projectInfo';
import styled from '@emotion/styled';
import NextLink from 'next/link';

const Line = styled(Box)`
  position: absolute;
  top: 50%;
  right: 0;
  width: 50%;
  height: 2px;
  background: darkgray;
  transform: translateY(-50%);
`;

const TechnologySection = ({ bgColor, icon, frameworks, projects, hoverColor, id, title }) => (
  <LinkBox as={NextLink} href={`/techs/${id}`}>
      <Flex
        rounded="xl"
        direction="column"
        mt={4}
        bg={bgColor}
        h="25vh"
        w="25vh"
        justify="flex-end"
        _hover={{ bg: hoverColor }}
        position="relative"
        alt={title}
        cursor="pointer"
      >
        <Flex position="absolute" top={0} left={0} p={4}>
          <Icon as={icon} w={16} h={16} color="white" />
        </Flex>

        <LinkOverlay as="div" href={`/projects/${id}`}>
        <Text color="white" p="4" fontSize="xl" fontWeight="semibold">
          <Meta>Frameworks:</Meta>
          <span style={{ fontSize: 'small' }}>{frameworks}</span>
          <Meta>Projects:</Meta>
          <span style={{ fontSize: 'small' }}>{projects}</span>
        </Text>
        </LinkOverlay>
        <Line />
      </Flex>
  </LinkBox>
);

export default TechnologySection;

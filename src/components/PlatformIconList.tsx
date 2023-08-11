import { Platform } from "../hooks/useGames";
import { HStack, Icon, Text } from "@chakra-ui/react";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";

const iconMap: { [key: string]: IconType } = {
  playstation: FaPlaystation,
  pc: FaWindows,
  xbox: FaXbox,
  nintendo: SiNintendo,
  mac: FaApple,
  linux: FaLinux,
  ios: MdPhoneIphone,
  web: BsGlobe,
  android: FaAndroid,
};
// [{platform : {id: , name: , slug: } }]
interface Props {
  platforms: Platform[];
}
const PlatformIconList = ({ platforms }: Props) => {
  return (
    <>
      <HStack mt={2}>
        {platforms.map((platform) => (
          // <Text>{platform.name}</Text>
          <Icon
            as={iconMap[platform.slug]}
            key={platform.id}
            color="gray.500"
          ></Icon>
        ))}
      </HStack>
    </>
  );
};

export default PlatformIconList;

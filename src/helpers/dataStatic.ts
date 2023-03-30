import {UserType} from "../interfaces/user.interface";

export const initialData: UserType[] = [
    {
        id: 0,
        name: "Naruto",
        avatar: "naruto.png",
        description: "Naruto Uzumaki với tuổi thơ không mấy hạnh phúc và những nỗ lực để được công nhận đã chạm đến cảm xúc của nhiều người. Vậy Naruto là con người như thế nào? ",
        isActive: false,
    },
    {
        id: 1,
        name: "Hinata",
        avatar: "hinata.png",
        description: "Uzumaki Hinata là một nữ nhẫn giả và là người thừa kế cũ của tộc Hyuga. Vì tính cách nhu mì của cô, cha cô nghi ngờ rằng cô không phù hợp với trách nhiệm của một tộc trưởng. ",
        isActive: false,
    },
    {
        id: 2,
        name: "Kakashi",
        avatar: "kakashi.png",
        description:
            " Hatake Kakashi là một trong những nhân vật được yêu thích nhất. Thế nhưng, không phải ai cũng biết những sự thật thú vị sau về thầy Kakashi – Hokage Đệ Lục của làng Lá. ",
        isActive: true,
    },
    {
        id: 3,
        name: "Sakura",
        avatar: "sakura.png",
        description: "Haruno Sakura là một ninja nữ (kunoichi) thuộc làng Lá, và là thành viên nhóm 7, bao gồm cả Uzumaki Naruto, Uchiha Sasuke và giáo viên Hatake Kakashi. ",
        isActive: false,
    },
    {
        id: 4,
        name: "Sasuke",
        avatar: "sasuke.png",
        description: "Uchiha Sasuke là nhân vật trong series manga/anime nổi tiếng Naruto. Tác giả Kishimoto Masashi đã lên ý tưởng để Sasuke vs Naruto là đối thủ của nhau ngay từ đầu.",
        isActive: false,
    },
];
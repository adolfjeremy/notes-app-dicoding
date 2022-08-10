import addImage from "../icons/add.png";
import activeImage from "../icons/note.png";
import archiveImage from "../icons/archive.png";

const menus = {
    addNote: {
        title: "Add Note",
        control: "add-form",
        img: addImage,
    },
    navList: [
        {
            id: 1,
            title: "Active Notes",
            control: "active-notes",
            img: activeImage,
        },
        {
            id: 2,
            title: "Archive Notes",
            control: "archive-notes",
            img: archiveImage,
        },
    ],
};

export default menus;

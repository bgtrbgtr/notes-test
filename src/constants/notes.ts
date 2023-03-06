import { INoteItem } from "../types/types";

const newNotes: INoteItem[] = [
  {
    id: 1,
    createdAt: "05.03.2023",
    updatedAt: "05.03.2023",
    noteBody: {
      title: "Title",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec nisi quis lacus tincidunt viverra. Ut a felis egestas, interdum felis quis, pellentesque arcu. Vestibulum ornare nunc molestie mauris mattis pulvinar. Donec consequat ultricies quam, eu sollicitudin odio blandit nec. Ut egestas diam a porta aliquam. Proin posuere dolor leo, at imperdiet lorem aliquam in. Etiam sed metus pellentesque, bibendum enim nec, rutrum nibh. Suspendisse potenti. Vestibulum lobortis volutpat eros, ut volutpat purus. Morbi sit amet congue orci. Proin rhoncus vitae diam non mollis. Ut ac lacinia leo, id pharetra risus. Sed tristique tempus lectus, at pellentesque felis semper at. Etiam sed ornare purus, eget tempor nisl.",
      isEditing: false,
      onChange: () => {},
    },
  },
  {
    id: 2,
    createdAt: "04.03.2023",
    updatedAt: "05.03.2023",
    noteBody: {
      title: "Title2",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec nisi quis lacus tincidunt viverra. Ut a felis egestas, interdum felis quis, pellentesque arcu. Vestibulum ornare nunc molestie mauris mattis pulvinar. Donec consequat ultricies quam, eu sollicitudin odio blandit nec. Ut egestas diam a porta aliquam. Proin posuere dolor leo, at imperdiet lorem aliquam in. Etiam sed metus pellentesque, bibendum enim nec, rutrum nibh. Suspendisse potenti. Vestibulum lobortis volutpat eros, ut volutpat purus. Morbi sit amet congue orci. Proin rhoncus vitae diam non mollis. Ut ac lacinia leo, id pharetra risus. Sed tristique tempus lectus, at pellentesque felis semper at. Etiam sed ornare purus, eget tempor nisl.",
      isEditing: false,
      onChange: () => {},
    },
  },
  {
    id: 3,
    createdAt: "02.03.2023",
    updatedAt: "02.03.2023",
    noteBody: {
      title: "Title3",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec nisi quis lacus tincidunt viverra. Ut a felis egestas, interdum felis quis, pellentesque arcu. Vestibulum ornare nunc molestie mauris mattis pulvinar. Donec consequat ultricies quam, eu sollicitudin odio blandit nec. Ut egestas diam a porta aliquam. Proin posuere dolor leo, at imperdiet lorem aliquam in. Etiam sed metus pellentesque, bibendum enim nec, rutrum nibh. Suspendisse potenti. Vestibulum lobortis volutpat eros, ut volutpat purus. Morbi sit amet congue orci. Proin rhoncus vitae diam non mollis. Ut ac lacinia leo, id pharetra risus. Sed tristique tempus lectus, at pellentesque felis semper at. Etiam sed ornare purus, eget tempor nisl.",
      isEditing: false,
      onChange: () => {},
    },
  },
];

export default newNotes;

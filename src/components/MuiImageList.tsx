import {
  Stack,
  ImageList,
  ImageListItem,
  Box,
  ImageListItemBar
} from "@mui/material";

const itemData = [
  {
    img: "http://source.unsplash.com/random",
    title: "Yeaggaahhh"
  },
  {
    img: "http://source.unsplash.com/random",
    title: "Hello"
  },
  {
    img: "http://source.unsplash.com/random",
    title: "Waguan"
  },
  {
    img: "http://source.unsplash.com/random",
    title: "Moscow B"
  },
  {
    img: "http://source.unsplash.com/random",
    title: "Zone 2 k"
  }
];
const itemData2 = [
  {
    img:
      "https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTgwOTN8MHwxfHNlYXJjaHwxN3x8dGVjaHxlbnwwfHx8fDE2NjU5MDM5OTA&ixlib=rb-1.2.1&q=80&w=1080",
    title: "Yeaggaahhh"
  },
  {
    img: "http://source.unsplash.com/random",
    title: "Hello"
  },
  {
    img: "http://source.unsplash.com/random",
    title: "Waguan"
  },
  {
    img: "http://source.unsplash.com/random",
    title: "Moscow B"
  },
  {
    img:
      "https://images.unsplash.com/photo-1662581871665-f299ba8ace07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTgwOTN8MXwxfHNlYXJjaHwxfHx0ZWNofGVufDB8fHx8MTY2NTkwMzk5MA&ixlib=rb-1.2.1&q=80&w=1080",
    title: "Zone 2 k"
  },
  {
    img:
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTgwOTN8MHwxfHNlYXJjaHwzfHx0ZWNofGVufDB8fHx8MTY2NTkwMzk5MA&ixlib=rb-1.2.1&q=80&w=1080",
    title: "Back"
  },
  {
    img:
      "https://images.unsplash.com/photo-1608053874302-694caf700023?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTgwOTN8MHwxfHNlYXJjaHwxfHxsZWd8ZW58MHx8fHwxNjY1OTAzOTEx&ixlib=rb-1.2.1&q=80&w=1080",
    title: "do"
  },
  {
    img: "http://source.unsplash.com/random",
    title: "yo"
  },
  {
    img:
      "https://images.unsplash.com/photo-1577999499505-a4b64aaa9066?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTgwOTN8MHwxfHNlYXJjaHw4fHxsZWd8ZW58MHx8fHwxNjY1OTAzOTEx&ixlib=rb-1.2.1&q=80&w=1080",
    title: "want"
  }
];

export const MuiImageList = () => {
  return (
    <Stack spacing={4}>
      <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={140}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar title={item.title} />
          </ImageListItem>
        ))}
      </ImageList>
      <ImageList
        variant="woven"
        sx={{ width: 500, height: 450 }}
        cols={3}
        gap={8}
      >
        {itemData2.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2`}
              alt={item.title}
              loading="lazy"
            />{" "}
            <ImageListItemBar title={item.title} />
          </ImageListItem>
        ))}
      </ImageList>
      <Box sx={{ width: 500, height: 450, overflowY: "scroll" }}>
        <ImageList variant="masonry" cols={3} gap={8}>
          {itemData2.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?fit=crop&auto=format&dpr=2`}
                alt={item.title}
                loading="lazy"
              />{" "}
              <ImageListItemBar title={item.title} />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </Stack>
  );
};

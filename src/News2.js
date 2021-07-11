// import React, { useState, useEffect, useMemo } from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import List from "@material-ui/core/List";
// import ListItem from "@material-ui/core/ListItem";
// import Divider from "@material-ui/core/Divider";
// import ListItemText from "@material-ui/core/ListItemText";
// import ListItemAvatar from "@material-ui/core/ListItemAvatar";
// import Avatar from "@material-ui/core/Avatar";
// import Typography from "@material-ui/core/Typography";
// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: "100%",
//     maxWidth: "36ch",
//     backgroundColor: theme.palette.background.paper
//   },
//   inline: {
//     display: "inline"
//   }
// }));
// const News = () => {
//   const classes = useStyles();
//   const [error, setError] = useState("");
//   const [article, setArticle] = useState([]);
//   useMemo(() => {
//     var result = [];
//     // async function load() {
//     //   const gets = await
//     // // `https://bing-news-search1.p.rapidapi.com/news/search?freshness=Day&count=5&textFormat=Raw&safeSearch=Strict&q=covid`,
//     fetch(
//       "https://gnews.io/api/v4/search?q=covid19&token=a531aa88f92fe941119d82bccfc5e0ed&max=5",
//       {
//         mode: "no-cors"
//       }
//     )
//       // .then((res) => res.json())
//       .then((res) => {
//         console.log(res);
//         res.articles[0].map((data) => {
//           result.push(data);
//           // console.log(data);
//         });
//       })
//       .catch((e) => setError("Could not fetch any contents now"));
//     // }
//     setArticle(result);
//     // console.log(result);
//     // load();
//   }, []);
//   return (
//     <div>
//       {/* {article.map((data) => {
//         return <p style={{ color: "black" }}>{data.name}</p>;
//       })} */}
//     </div>
//   );
//   // console.log(article);
//   // return (
//   //   <List className={classes.root}>

//   //     <ListItem alignItems="flex-start">
//   //       <ListItemAvatar>
//   //         <Avatar
//   //           alt="News IMage"
//   //           src=""
//   //           // src={article[0].image.thumbnail.contentUrl}
//   //         />
//   //       </ListItemAvatar>
//   //       <ListItemText
//   //         primary="Headline"
//   //         secondary={
//   //           <React.Fragment>
//   //             <Typography
//   //               component="span"
//   //               variant="body2"
//   //               className={classes.inline}
//   //               color="textPrimary"
//   //             >
//   //               {}
//   //             </Typography>
//   //             {/* {" — I'll be in your neighborhood doing errands this…"} */}
//   //             {"-Snapshot....."}
//   //           </React.Fragment>
//   //         }
//   //       />
//   //     </ListItem>
//   //     <Divider variant="inset" component="li" />
//   //   </List>
//   // );
// };

// export default News;

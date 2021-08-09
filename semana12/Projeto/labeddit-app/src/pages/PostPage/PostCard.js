import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import logo from "../../assets/logo2.jpeg";
import CommentOutlinedIcon from '@material-ui/icons/CommentOutlined';
import {
  ContainerComments,
  CardPostContainer,
  ContainerTotalVotes,
  TargetContainer,
  ContainerVotes2,
} from "../styled";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Comments from "../../components/Comments/Comments";
import CreateCommentsPosts from "../../components/Comments/CreateCommentsPost";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ThumbUpOutlinedIcon from "@material-ui/icons/ThumbUpOutlined";
import ThumbDownAltIcon from "@material-ui/icons/ThumbDownAlt";
import ThumbDownOutlinedIcon from "@material-ui/icons/ThumbDownOutlined";
import { HeartContainer } from "../../components/styled";
import {  postVote , changeVote , deleteVote } from "../../services/comments";
import { BASE_URL } from "../../constants/urls";
import CancelPresentationIcon from "@material-ui/icons/CancelPresentation";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 700,
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const PostsCards = (props) => {
  let [iconLike, setIconLike] = useState(
    props.userVote === 1 ? <ThumbUpAltIcon /> : <ThumbUpOutlinedIcon />
  );
  let [iconDislike, setIconDislike] = useState(
    props.userVote === -1 ? <ThumbDownAltIcon /> : <ThumbDownOutlinedIcon />
  );
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const openComments = (id) => {
    CommentsList(id);
    localStorage.setItem("idComment", id);
  };
  const CommentsList = () => {
    return <Comments />;
  };

  const onClickPositive = (id, vote) => {
    if (vote === null) {
      postVote(`${BASE_URL}/posts/${id}/votes`, 1);
    } else if (vote === -1) {
      changeVote(`${BASE_URL}/posts/${id}/votes`, 1);
    }
    return setIconLike(<ThumbUpAltIcon />);
  };

  const onClickNegative = (id, vote) => {
    if (vote === null) {
      postVote(`${BASE_URL}/posts/${id}/votes`, -1);
    } else if (vote === 1) {
      changeVote(`${BASE_URL}/posts/${id}/votes`, -1);
    }
    return setIconDislike(<ThumbDownAltIcon />);
  };

  const onClickDeleteVote = (id) => {
    deleteVote(`${BASE_URL}/posts/${id}/votes`);
  };

  return (
    <CardPostContainer>
      <Card className="CardPost">
        <CardHeader
          avatar={
            <Avatar>
              <img width="50px" src={logo} alt="logo" />
            </Avatar>
          }
          subheader={props.username}
          //title={UseDateTreatmentBr(props.createdAt)}
        />
        <CardContent>
          <Typography variant="h6" color="textSecondary" align='center' component="p">
            {props.body} <br/>
          </Typography>
          <Typography variant="h5" color="textSecondary" component="p">
            🗣️{props.username}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <TargetContainer>
            <ContainerTotalVotes>
              Total de Curtidas:
              {props.voteSum ? props.voteSum : 0}
            </ContainerTotalVotes>
            <ContainerVotes2>
              <HeartContainer
                onClick={() => onClickPositive(props.id, props.userVote)}
              >
                {iconLike}
              </HeartContainer>
              <HeartContainer
                onClick={() => onClickNegative(props.id, props.userVote)}
              >
                {iconDislike}
              </HeartContainer>
              <HeartContainer>
                <CancelPresentationIcon
                  onClick={() => onClickDeleteVote(props.id)}
                />
              </HeartContainer>
            </ContainerVotes2>
          </TargetContainer>
          <ContainerComments>
            {props.commentCount}
            <CommentOutlinedIcon />
          </ContainerComments>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon onClick={() => openComments(props.id)} />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            {CommentsList()}
            <br />
            <CreateCommentsPosts id={props.id} />
          </CardContent>
        </Collapse>
      </Card>
    </CardPostContainer>
  );
};
export default PostsCards;

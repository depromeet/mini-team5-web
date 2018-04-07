import React from "react";

import { storiesOf } from "@storybook/react";
import CommentPage from "./CommentPage";

storiesOf("Comment Page", module)
  .add("댓글 창 페이지", CommentPage, "댓글창을 로드한다", () => <CommentPage topic="배틀그라운드" />);
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h4>Warning!</h4>
          Are you sure you want to do this?
        </div>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Kelvin"
          timeAgo={"Today at 3:00PM"}
          avatar={faker.image.avatar()}
          comment={faker.lorem.sentence()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Joshua"
          timeAgo="Today at 6:00PM"
          avatar={faker.image.avatar()}
          comment={faker.lorem.sentence()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Mary"
          timeAgo="Today at 12:00PM"
          avatar={faker.image.avatar()}
          comment={faker.lorem.sentence()}
        />
      </ApprovalCard>
    </div>
  );
};

export default App;

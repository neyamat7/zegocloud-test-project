import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useParams } from "react-router";

const Room = () => {
  const { roomId } = useParams();

  let myMeeting = async (element) => {
    // generate Kit Token
    const appID = 992543921;
    const serverSecret = "6e7dc916d0f55a17a4f6657e2576798f";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomId,
      Date.now().toString(),
      "neyamat"
    );

    // Create instance object from Kit Token.
    const zp = ZegoUIKitPrebuilt.create(kitToken);
    // start the call
    zp.joinRoom({
      container: element,
      scenario: {
        mode: ZegoUIKitPrebuilt.VideoConference,
      },
    });
  };

  return (
    <div>
      <div ref={myMeeting} />
    </div>
  );
};

export default Room;

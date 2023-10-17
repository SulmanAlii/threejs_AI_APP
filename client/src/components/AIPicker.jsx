import CustomButton from "./CustomButton";

const AIPicker = ({ prompt, setPrompt, generatingImg, handleSubmit }) => {
  return (
    <div className="aipicker-container">
      <textarea
        placeholder="Ask AI..."
        name=""
        id=""
        value={prompt}
        rows="5"
        className="aipicker-textarea"
        onChange={(e) => setPrompt(e.target.value)}
      ></textarea>
      <div className="flex flex-wrap gap-3">
        {generatingImg ? (
          <CustomButton
            type="outline"
            title="Asking AI"
            customStyles="text-xs"
          />
        ) : (
          <>
            {" "}
            <CustomButton
              type="outline"
              title="AI LOGO..."
              handleClick={() => handleSubmit("logo")}
              customStyles="text-xs"
            />{" "}
            <CustomButton
              type="filled"
              title="AI LOGO"
              handleClick={() => handleSubmit("full")}
              customStyles="text-xs"
            />
          </>
        )}
      </div>
    </div>
  );
};

export default AIPicker;

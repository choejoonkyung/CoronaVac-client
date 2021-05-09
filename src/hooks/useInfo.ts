export default function useInfo() {
  const toGithub = () => {
    window.open("https://github.com/choejoonkyung/CoronaVac-client", "_blank");
  };
  const questionMail = () => {
    window.open("", "", "_blank");
  };
  return { questionMail, toGithub };
}

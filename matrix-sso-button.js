(function () {
  const matrixURL = "/saml_sso/sso";
  const matrixButtonID = "matrix_sso_btn";

  function insertMatrixButton() {
    const loginOptions = document.querySelector(".loginOptions");
    const alreadyInserted = document.getElementById(matrixButtonID);

    if (loginOptions && !alreadyInserted) {
      const matrixButton = document.createElement("a");
      matrixButton.href = matrixURL;
      matrixButton.id = matrixButtonID;
      matrixButton.textContent = "Login with Matrix SAML SSO";
      matrixButton.className = "sso_btn";
      matrixButton.style.cssText = `
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #6200ea;
        color: white;
        font-weight: bold;
        text-align: center;
        padding: 12px 20px;
        border-radius: 50px;
        text-decoration: none;
        margin-top: 10px;
        font-size: 15px;
        transition: background-color 0.3s ease;
        box-shadow: 0 0 0 1px rgba(0,0,0,0.05);
      `;
      matrixButton.onmouseover = () => matrixButton.style.backgroundColor = '#4500b5';
      matrixButton.onmouseout = () => matrixButton.style.backgroundColor = '#6200ea';

      const clarotyBtn = document.querySelector("#office365_sso_btn");
      if (clarotyBtn) {
        clarotyBtn.insertAdjacentElement("afterend", matrixButton);
      } else {
        loginOptions.appendChild(matrixButton);
      }
    }
  }

  const observer = new MutationObserver(() => insertMatrixButton());
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });

  document.addEventListener("DOMContentLoaded", insertMatrixButton);
})();

import { bemCN } from "../../configs/bem-classname";
import { User } from "../../mocks/view-models/user";
import {
  localStorageService,
  LocalStorageVariableName,
} from "../../services/local-storage-service";
import { ReactComponent as StatIcon } from "../../shared/images/svg/stats.svg";
import { Button, ButtonSizes } from "../../ui/button/button";
import { getWelcomeText } from "../../utils/welcome-text";
import "./top-panel.scss";

const topPanelCN = bemCN("top-panel");

export const TopPanel = () => {
  const user = localStorageService.getValue<User>(
    LocalStorageVariableName.user
  );
  return (
    <div className={topPanelCN()}>
      <p>
        {getWelcomeText()} <span>{user?.name}!</span>
      </p>
      <Button size={ButtonSizes.small} icon={<StatIcon />} />
    </div>
  );
};

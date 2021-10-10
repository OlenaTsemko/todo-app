import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useIntl } from 'react-intl';
import { IconButton } from '@mui/material';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

import { logout } from 'redux/auth/auth-operations';
import { getUserName, getUserAvatar } from 'redux/auth/auth-selectors';
import { translate } from 'i18n';
import routes from 'routes';
import styles from './UserMenu.module.scss';

const UserMenu = () => {
  const intl = useIntl();
  const name = useSelector(getUserName);
  const avatar = useSelector(getUserAvatar);

  const dispatch = useDispatch();
  const logoutHandler = () => dispatch(logout());

  return (
    <div className={styles.userMenu}>
      <NavLink
        to={routes.profile}
        className={styles.NavLink}
        activeClassName={styles.NavLinkActive}
      >
        <div className={styles.infoWrapper}>
          <div className={styles.imageWrapper}>
            <img className={styles.avatar} src={avatar} alt="User avatar" />
          </div>
          <div>
            <p>
              {name
                ? name.charAt(0).toUpperCase() + name.slice(1)
                : translate('guest')}
              !
            </p>
            <p>{translate('my_profile')}!</p>
          </div>
        </div>
      </NavLink>

      <IconButton
        className={styles.exitBtnMobile}
        aria-label="Exit"
        type="button"
        color="primary"
        title={intl.formatMessage({ id: 'exit' })}
        onClick={logoutHandler}
      >
        <ExitToAppIcon />
      </IconButton>
    </div>
  );
};

export default UserMenu;

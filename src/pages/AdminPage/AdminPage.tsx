import { FC, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { Profile } from '../../components/profile/profile';
import { TitleBar } from '../../components/title-bar';
import { Sidebar } from '../../components/sidebar';
import { Filter } from '../../components/filters/filter';
import { VolunteerCard } from '../../components/card/Card';

import { ConfirmIcon } from '../../ui/icons/confirm-icon';
import { Button } from '../../ui/button/button';

import { getAllUsers } from '../../api';

import styles from './AdminPage.module.scss';

import type { TUser } from '../../types';

const AdminPage: FC = () => {
  const [profile, setProfile] = useState<TUser>();
  const [usersList, setUsersList] = useState<TUser[]>();

  const [filter, setFilter] = useState({});
  const [isShowFilter, setIsShowFilter] = useState(false);

  const { pathname } = useLocation();

  useEffect(() => {
    const getData = async () => {
      const data = await getAllUsers();

      const adminData = data.filter((user) => user.id === 2)[0];
      const usersData = data.filter((user) => user.role === 'volunteer');

      setProfile(adminData);
      setUsersList(usersData);
    };

    getData();
  }, []);

  const filterToggle = () => {
    setIsShowFilter((prev) => !prev);
  };

  const getResult = (result: { [name: string]: string[] }) => {
    setFilter({ ...result });
    setIsShowFilter(false);
  };

  return (
    <div className="page-container">
      <div>
        <Profile type="admin" {...profile} />
        <Sidebar>
          <Button
            icon="confirm"
            onClick={() => {}}
            type="bigCard"
            active={pathname === '/admin'}
          >
            Подтверждение&nbsp;/ Блокировка
          </Button>
          <Button
            icon="statistics"
            onClick={() => {}}
            type="bigCard"
            active={pathname === '/admin/stat'}
          >
            Статистика
          </Button>
          <Button icon="application" onClick={() => {}} type="bigCard">
            Создание / Редактирование заявки
          </Button>
        </Sidebar>
      </div>
      <div className="page-content">
        <TitleBar
          title="Подтверждение / Блокировка"
          icon={<ConfirmIcon color="dark-blue" />}
          filterHandler={filterToggle}
        />
        {isShowFilter && (
          <Filter
            sendResult={getResult}
            currentConditions={filter}
            type="admin"
            moduleOutStyles={styles.filter}
          />
        )}
        <div className="catalog">
          {usersList &&
            usersList?.map((item) => {
              return <VolunteerCard {...item} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default AdminPage;

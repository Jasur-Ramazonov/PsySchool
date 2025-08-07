import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import styles from "../utils/Sidebar.module.css";
import StatisticLogo from "./StatisticLogo";
import Resultslogo from "./Resultslogo";
import MenuLogo from "./MenuLogo";
import CategoriesLogo from "./CategoriesLogo";
import TestsLogo from "./TestsLogo";
import LessonsLogo from "./LessonsLogo";
import AdsLogo from "./AdsLogo";
import RegionsLogo from "./RegionsLogo";
import SignOutLogo from "./SignOutLogo";
import { HiArrowDown, HiOutlineArrowUp } from "react-icons/hi";

interface SidebarProps {
  collapsed: boolean;
}

const Sidebar = ({ collapsed }: SidebarProps) => {
  const location = useLocation();
  const navigate = useNavigate();

  const [openResults, setOpenResults] = useState(false);
  const [openLessons, setOpenLessons] = useState(false);
  const [openTests, setOpenTests] = useState(false);

  const isActive = (path: string): boolean => location.pathname === path;

  const isInResults = location.pathname.startsWith("/natijalar");
  const isInLessons = location.pathname.startsWith("/lessons");
  const isInTests = location.pathname.startsWith("/tests");

  //   useEffect(() => {
  //     if (isInResults) setOpenResults(true);
  //     if (isInLessons) setOpenLessons(true);
  //     if (isInTests) setOpenTests(true);
  //   }, [location.pathname]);

  return (
    <div className={`${styles.sidebar} ${collapsed ? styles.collapsed : ""}`}>
      <div className={styles.logo}>
        {collapsed ? (
          <MenuLogo />
        ) : (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
            }}
          >
            <MenuLogo />
            <h2>PsySchool</h2>
          </div>
        )}
      </div>
      <ul style={{ paddingTop: "1rem" }} className={styles.ul}>
        <li
          onClick={() => navigate("/statistika")}
          className={`${styles.li} ${
            isActive("/statistika") ? styles.active : ""
          }`}
        >
          <span>
            <StatisticLogo />
          </span>
          <Link to="/statistika" className={styles.link}>
            Statistika
          </Link>
        </li>
        {/* Natijalar */}
        <li
          onClick={() => setOpenResults((prev) => !prev)}
          className={`${styles.li} ${isInResults ? styles.active : ""}`}
          style={{
            cursor: "pointer",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span>
            <Resultslogo />
          </span>
          <span
            className={styles.link}
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span>Natijalar</span>
            <span>{openResults ? <HiOutlineArrowUp /> : <HiArrowDown />}</span>
          </span>
        </li>
        {/* Natijalar sub-menu */}
        {openResults && !collapsed && (
          <>
            <li
              onClick={() => navigate("/natijalar/boshlangich")}
              className={`${styles.li} ${styles.submenu} ${
                isActive("/natijalar/boshlangich") ? styles.active : ""
              }`}
            >
              <Link to="/natijalar/boshlangich" className={styles.link}>
                - Boshlang'ich test natijalari
              </Link>
            </li>
            <li
              onClick={() => navigate("/natijalar/darsdagi")}
              className={`${styles.li} ${styles.submenu} ${
                isActive("/natijalar/darsdagi") ? styles.active : ""
              }`}
            >
              <Link to="/natijalar/darsdagi" className={styles.link}>
                - Darsdagi test natijalari
              </Link>
            </li>
            <li
              onClick={() => navigate("/natijalar/yakuniy")}
              className={`${styles.li} ${styles.submenu} ${
                isActive("/natijalar/yakuniy") ? styles.active : ""
              }`}
            >
              <Link to="/natijalar/yakuniy" className={styles.link}>
                - Yakuniy test natijalari
              </Link>
            </li>
            <li
              onClick={() => navigate("/natijalar/category")}
              className={`${styles.li} ${styles.submenu} ${
                isActive("/natijalar/category") ? styles.active : ""
              }`}
            >
              <Link to="/natijalar/category" className={styles.link}>
                - Kategoriy test natijalari
              </Link>
            </li>
          </>
        )}
        <li
          onClick={() => navigate("/categories")}
          className={`${styles.li} ${
            isActive("/categories") ? styles.active : ""
          }`}
        >
          <span>
            <CategoriesLogo />
          </span>
          <Link to="/categories" className={styles.link}>
            Kategoriyalar
          </Link>
        </li>
        {/* Testlar */}
        <li
          onClick={() => setOpenTests((prev) => !prev)}
          className={`${styles.li} ${isInTests ? styles.active : ""}`}
          style={{
            cursor: "pointer",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span>
            <TestsLogo />
          </span>
          <span
            className={styles.link}
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span>Testlar</span>
            <span>{openTests ? <HiOutlineArrowUp /> : <HiArrowDown />}</span>
          </span>
        </li>
        {/* Testlar sub-menu */}
        {openTests && !collapsed && (
          <>
            <li
              onClick={() => navigate("/tests/boshlangich")}
              className={`${styles.li} ${styles.submenu} ${
                isActive("/tests/boshlangich") ? styles.active : ""
              }`}
            >
              <Link to="/tests/boshlangich" className={styles.link}>
                - Boshlang&apos;ich testlar
              </Link>
            </li>
            <li
              onClick={() => navigate("/tests/doimiy")}
              className={`${styles.li} ${styles.submenu} ${
                isActive("/tests/doimiy") ? styles.active : ""
              }`}
            >
              <Link to="/tests/doimiy" className={styles.link}>
                - Doimiy testlar
              </Link>
            </li>
            <li
              onClick={() => navigate("/tests/yakuniy")}
              className={`${styles.li} ${styles.submenu} ${
                isActive("/tests/yakuniy") ? styles.active : ""
              }`}
            >
              <Link to="/tests/yakuniy" className={styles.link}>
                - Yakuniy testlar
              </Link>
            </li>
          </>
        )}
        {/* Darslar */}
        <li
          onClick={() => setOpenLessons((prev) => !prev)}
          className={`${styles.li} ${isInLessons ? styles.active : ""}`}
          style={{
            cursor: "pointer",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span>
            <LessonsLogo />
          </span>
          <span
            className={styles.link}
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span>Darslar</span>
            <span>{openLessons ? <HiOutlineArrowUp /> : <HiArrowDown />}</span>
          </span>
        </li>
        {/* Darslar sub-menu */}
        {openLessons && !collapsed && (
          <>
            <li
              onClick={() => navigate("/lessons/add-module")}
              className={`${styles.li} ${styles.submenu} ${
                isActive("/lessons/add-module") ? styles.active : ""
              }`}
            >
              <Link to="/lessons/add-module" className={styles.link}>
                - Module qo&apos;shish
              </Link>
            </li>
            <li
              onClick={() => navigate("/lessons/add-lesson")}
              className={`${styles.li} ${styles.submenu} ${
                isActive("/lessons/add-lesson") ? styles.active : ""
              }`}
            >
              <Link to="/lessons/add-lesson" className={styles.link}>
                - Dars qo&apos;shish
              </Link>
            </li>
            <li
              onClick={() => navigate("/lessons/add-test")}
              className={`${styles.li} ${styles.submenu} ${
                isActive("/lessons/add-test") ? styles.active : ""
              }`}
            >
              <Link to="/lessons/add-test" className={styles.link}>
                - Test qo&apos;shish
              </Link>
            </li>
          </>
        )}
        <li
          onClick={() => navigate("/reklamalar")}
          className={`${styles.li} ${
            isActive("/reklamalar") ? styles.active : ""
          }`}
        >
          <span>
            <AdsLogo />
          </span>
          <Link to="/reklamalar" className={styles.link}>
            Reklamalar
          </Link>
        </li>
        <li
          onClick={() => navigate("/viloyatlar")}
          className={`${styles.li} ${
            isActive("/viloyatlar") ? styles.active : ""
          }`}
        >
          <span>
            <RegionsLogo />
          </span>
          <Link to="/viloyatlar" className={styles.link}>
            Viloyatlar
          </Link>
        </li>
        <li
          onClick={() => navigate("/log-out")}
          className={`${styles.li} ${
            isActive("/log-out") ? styles.active : ""
          }`}
        >
          <span>
            <SignOutLogo />
          </span>
          <Link to="/log-out" className={styles.link}>
            Chiqish
          </Link>
        </li>
      </ul>
      {collapsed && openResults && (
        <div
          className={styles.popupSubmenu}
          style={{
            left: "60px",
            top: "120px",
            position: "absolute",
            zIndex: 1000,
          }}
        >
          <li
            onClick={() => navigate("/natijalar/boshlangich")}
            className={`${styles.li} ${styles.submenu} ${
              isActive("/natijalar/boshlangich") ? styles.active : ""
            }`}
          >
            <Link to="/natijalar/boshlangich" className={styles.link}>
              - Boshlang'ich test natijalari
            </Link>
          </li>
          <li
            onClick={() => navigate("/natijalar/darsdagi")}
            className={`${styles.li} ${styles.submenu} ${
              isActive("/natijalar/darsdagi") ? styles.active : ""
            }`}
          >
            <Link to="/natijalar/darsdagi" className={styles.link}>
              - Darsdagi test natijalari
            </Link>
          </li>
          <li
            onClick={() => navigate("/natijalar/yakuniy")}
            className={`${styles.li} ${styles.submenu} ${
              isActive("/natijalar/yakuniy") ? styles.active : ""
            }`}
          >
            <Link to="/natijalar/yakuniy" className={styles.link}>
              - Yakuniy test natijalari
            </Link>
          </li>
          <li
            onClick={() => navigate("/natijalar/category")}
            className={`${styles.li} ${styles.submenu} ${
              isActive("/natijalar/category") ? styles.active : ""
            }`}
          >
            <Link to="/natijalar/category" className={styles.link}>
              - Kategoriy test natijalari
            </Link>
          </li>
        </div>
      )}
      {collapsed && openTests && (
        <div
          className={styles.popupSubmenu}
          style={{
            left: "60px",
            top: "220px",
            position: "absolute",
            zIndex: 1000,
          }}
        >
          <li
            onClick={() => navigate("/tests/boshlangich")}
            className={`${styles.li} ${styles.submenu} ${
              isActive("/tests/boshlangich") ? styles.active : ""
            }`}
          >
            <Link to="/tests/boshlangich" className={styles.link}>
              - Boshlang‘ich testlar
            </Link>
          </li>
          <li
            onClick={() => navigate("/tests/oraliq")}
            className={`${styles.li} ${styles.submenu} ${
              isActive("/tests/oraliq") ? styles.active : ""
            }`}
          >
            <Link to="/tests/oraliq" className={styles.link}>
              - Oraliq testlar
            </Link>
          </li>
          <li
            onClick={() => navigate("/tests/yakuniy")}
            className={`${styles.li} ${styles.submenu} ${
              isActive("/tests/yakuniy") ? styles.active : ""
            }`}
          >
            <Link to="/tests/yakuniy" className={styles.link}>
              - Yakuniy testlar
            </Link>
          </li>
        </div>
      )}
      {collapsed && openLessons && (
        <div
          className={styles.popupSubmenu}
          style={{
            left: "60px",
            top: "320px",
            position: "absolute",
            zIndex: 1000,
          }}
        >
          <li
            onClick={() => navigate("/lessons/video")}
            className={`${styles.li} ${styles.submenu} ${
              isActive("/lessons/video") ? styles.active : ""
            }`}
          >
            <Link to="/lessons/video" className={styles.link}>
              - Video darslar
            </Link>
          </li>
          <li
            onClick={() => navigate("/lessons/interaktiv")}
            className={`${styles.li} ${styles.submenu} ${
              isActive("/lessons/interaktiv") ? styles.active : ""
            }`}
          >
            <Link to="/lessons/interaktiv" className={styles.link}>
              - Interaktiv darslar
            </Link>
          </li>
          <li
            onClick={() => navigate("/lessons/nazariy")}
            className={`${styles.li} ${styles.submenu} ${
              isActive("/lessons/nazariy") ? styles.active : ""
            }`}
          >
            <Link to="/lessons/nazariy" className={styles.link}>
              - Nazariy darslar
            </Link>
          </li>
        </div>
      )}
    </div>
  );
};

export default Sidebar;

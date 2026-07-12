import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title="Home" description="IIC BO 사용자 매뉴얼">
      <main className={styles.main}>
        <div className={styles.container}>
          {/* Header */}
          <div className={styles.header}>
            <img src="/img/logo.png" alt="IIC BO" className={styles.logo} />
            <div>
              <h1 className={styles.title}>{siteConfig.title}</h1>
              <p className={styles.subtitle}>IIC BO 시스템 사용자 매뉴얼 (KR)</p>
            </div>
          </div>

          {/* 시스템 소개 */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>시스템 소개</h2>
            <p>
              IIC BO(Back Office)는,
              <br />
              IIC 해외 법인을 위한 통합 운영 시스템으로,
              {' '}한국 오프라인 스토어에 대해서는 <strong>일부 스토어 관리 기능</strong>을 지원합니다.
            </p>
          </section>

          {/* 주요 기능 */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>주요 기능</h2>
            <p>-</p>
          </section>

          {/* 연동 시스템 */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>연동 시스템</h2>
            <div className={styles.features}>
              <span className={styles.featureTag}>HQ ERP</span>
            </div>
          </section>

          {/* 서버 접속 정보 & 문의 안내 */}
          <div className={styles.infoGrid}>
            <section className={styles.infoCard}>
              <h2 className={styles.sectionTitle}>서버 접속 정보</h2>
              <table className={styles.infoTable}>
                <tbody>
                  <tr>
                    <td className={styles.label}>운영</td>
                    <td><a href="https://bo.systemiic.com/ko/signin" target="_blank" rel="noopener noreferrer">https://bo.systemiic.com/ko/signin</a></td>
                  </tr>
                  <tr>
                    <td className={styles.label}>개발</td>
                    <td><a href="https://bo-dev.systemiic.com/ko/signin" target="_blank" rel="noopener noreferrer">https://bo-dev.systemiic.com/ko/signin</a></td>
                  </tr>
                </tbody>
              </table>
              <ul className={styles.infoNotes}>
                <li>계정 생성은 Operation 채널을 통해 문의해 주세요.</li>
                <li>발급 받은 계정의 초기 비밀번호는 변경하여 사용을 권장드립니다.</li>
                <li>계정 당 설정된 권한 변경 또한 관리자에게 문의해 주세요.</li>
              </ul>
            </section>

            <section className={styles.infoCard}>
              <h2 className={styles.sectionTitle}>시스템 운영 담당자</h2>
              <table className={styles.infoTable}>
                <tbody>
                  <tr>
                    <td className={styles.label}>PM</td>
                    <td>이우주</td>
                  </tr>
                  <tr>
                    <td className={styles.label}>Develop</td>
                    <td>곽형규, 이수빈, 김윤욱</td>
                  </tr>
                </tbody>
              </table>
            </section>
          </div>

          {/* 메뉴별 매뉴얼 */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>매뉴얼</h2>
            <div className={styles.cards}>
              <Link className={styles.card} to="/docs/report/system-login">
                <h3><span className={styles.cardEmoji}>📊</span>Report</h3>
                <p>리포트</p>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </Layout>
  );
}

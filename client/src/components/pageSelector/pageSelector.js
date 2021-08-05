import { connect } from "react-redux";
import styles from "./pageSelector.module.css";
import { nextPage, previousPage } from "../../actions";

export function PageSelector(props) {
  return (
    <div className={styles.arrowsContainer}>
      <input
        className={styles.pageSwitcher}
        onClick={props.previousPage}
        type="button"
        value="<"
      ></input>
      <label className={styles.pageNumber}>{props.page}</label>
      <input
        className={styles.pageSwitcher}
        onClick={props.nextPage}
        type="button"
        value=">"
      ></input>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    page: state.page,
  };
}

export default connect(mapStateToProps, { nextPage, previousPage })(
  PageSelector
);

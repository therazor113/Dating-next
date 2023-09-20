import classes from './styles.module.scss'

const HomeNavPill = ({ navSelect, setNavSelect }) => {
  return (
    <div className={classes.navContainer}>
      <div
        className={classes.leftNav}
        onClick={() => setNavSelect(0)}
      >
        <input
          type='checkbox'
          defaultChecked={!navSelect}
          className={classes.leftCheck}
        />
        <h2>
          Sign In
        </h2>
      </div>
      <div
        className={classes.rightNav}
        onClick={() => setNavSelect(1)}
      >
        <input
          type='checkbox'
          defaultChecked={navSelect}
        />
        <span className={classes.navSelected} />
        <h2>Register</h2>
      </div>
  </div>
  )
}

export default HomeNavPill

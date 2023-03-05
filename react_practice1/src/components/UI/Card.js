import './Card.css';
const Card = (props) => {
  //사용자 컴포넌트의 클래스의 css 사용을 위해 이름을 다음과 같이 지정
  const classes = 'card ' + props.className;

  //Card 컴포넌트 사용 시 컴포넌트 내부의 태그들 렌더링
  return <div className={classes}>{props.children}</div>
}
export default Card;
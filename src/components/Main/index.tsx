import * as S from './styles';

const Main = ({
  title = 'React with Next.js',
  description = 'TypeScript, Reactjs, Next.js and Styled Components',
}) => {
  return (
    <S.Wrapper>
      <S.Logo
        src="/img/logo.svg"
        alt="Imagem de um átomo e React avançado escrotp ao lado"
      />
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
      <S.Illustration
        src="/img/hero-illustration.svg"
        alt="Um desenvolvedor em frente a uma tela com código"
      />
    </S.Wrapper>
  );
};

export default Main;

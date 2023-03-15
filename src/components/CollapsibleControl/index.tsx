import styled from 'styled-components';

interface TCollapsibleControl {
  header: any;
  content: any;
  timing?: number;
  show: boolean;
  setShow: any;
}

export default function CollapsibleControl({
  header,
  content,
  show = false,
  setShow,
}: TCollapsibleControl) {
  return (
    <SCollapsibleControl>
      <div className="header" onClick={() => setShow(!show)}>
        {header}
      </div>
      <div className={`contentCollap ${show ? 'activeCollap' : ''}`}>{content}</div>
    </SCollapsibleControl>
  );
}

const SCollapsibleControl = styled.div`
  .header {
    cursor: pointer;
    user-select: none;
  }

  .contentCollap {
    max-height: 0px;
    overflow: hidden;
    transition: all 0.3s;

    &.activeCollap {
      max-height: 500px;
      overflow: unset;
    }
  }
`;

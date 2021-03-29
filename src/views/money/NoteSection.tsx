import styled from 'styled-components';
import React, {useRef, useState} from 'react';

const Wrapper = styled.section`
  background: #f5f5f5;
  padding: 0 16px;
  font-size: 14px;
  > label {
    display:flex;
    align-items: center;
    > span { margin-right: 16px; white-space: nowrap; }
    > input {
      display:block;
      width: 100%;
      height: 72px;
      background: none;
      border: none;
    }
  }
`;
const NoteSection: React.FC = () => {
    const [note,setNote] = useState('');
    //以下是input的非受控写法
    const refInput = useRef<HTMLInputElement>(null)
    const onBlur = ()=> {
        if(refInput.current!== null){
            //console.log(refInput.current.value);
            setNote(refInput.current.value);
        }
    }
    return(
        <Wrapper>
            <label>
                <span>备注</span>
                {/*以下是input的受控写法*/}
                {/*<input type="text" placeholder="在这里添加备注" value={note} onChange={(e)=>{setNote(e.target.value)}}/>*/}
                {/*以下是input的非受控写法*/}
                <input type="text" ref={refInput} placeholder="在这里添加备注"
                       defaultValue={note}
                       onBlur={onBlur} />
            </label>
        </Wrapper>
    )
}
export { NoteSection }

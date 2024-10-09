import React, { forwardRef } from "react";
import styled from "styled-components";

const StyledModal = styled.dialog`
    box-sizing: border-box;
    padding: 20px;
    border-radius: 12px;
    border: solid 2px var(--pk-point);
    background-color: var(--pk-modal-background);
    color: var(--pk-modal-font);
    & > div{
        width: 300px;
        height: 130px;

        display: flex;
        flex-direction: column;
    }

    h5{
        font-size: 17px;
        line-height: 1.6;
    }

    .btns{
        border-top: 1px solid var(--pk-modal-border-top);
        padding-top: 10px;
        margin-top: auto;
        display: flex;
        justify-content: flex-end;
        gap: 16px;

        button{
            border-radius: 8px;
            padding: 6px 12px;
            color: var(--pk-light-grey);
            font-weight: bold;
            background-color: var(--pk-point);

            &:hover{
                background-color: var(--pk-point-hover);
            }
        }
    }
`

function PagesChangeAlertModal ({next}, ref) {

    return (
        <StyledModal ref={ref}>
            <div>  
                <h5>작성 중 변경된 사항이 있습니다. <br/>
                저장 하지 않고 나가시겠습니까? </h5>
                <div className="btns">
                    <button style={{backgroundColor: '#c30928'}} onClick={() => ref.current.close()}>아니오</button>
                    <button onClick={next || null}>예</button>
                </div>
            </div>
        </StyledModal>
    )
}

export default forwardRef(PagesChangeAlertModal)
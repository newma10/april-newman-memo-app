import {render, screen} from "@testing-library/react";
import {MemoEdit} from "./MemoEdit";

test('should show MemoInput comp on rendering', () => {
        const _memo = 1;
        const _onSubmit = 2;

        let memoProp;
        let onSubmitprop;
        const _MemoInput = ({memo, onSubmit}) => {
            memoProp = memo;
            onSubmitprop = onSubmit;
            return <div>MOCK MEMO INPUT</div>
        }

        render(<MemoEdit memo={_memo} onSubmit={_onSubmit} _MemoInput={_MemoInput}/>)

        expect(screen.getByText('MOCK MEMO INPUT')).toBeInTheDocument();
    }
)

// Because the MemoInput component requires a {memo} and {onSubmit} props, those must be defined in the test.
// Pull the props out of the component but assigning to a variable, to be reused in rendering part of test.
// The memo and onSubmit props are shared between the MemoInput and MemoEdit components.
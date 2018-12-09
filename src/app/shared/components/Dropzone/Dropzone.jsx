import React from 'react';
import { default as NativeDropzone } from 'react-dropzone';

import style from './Dropzone.module.scss';

class Dropzone extends React.Component {
    state = {
        accepted: [], // File https://developer.mozilla.org/en-US/docs/Web/API/File
        rejected: [],
    };

    dropRef = React.createRef();

    componentWillUnmount = () => {
        // Make sure to revoke the data uris to avoid memory leaks
        this.state.files.forEach(f => URL.revokeObjectURL(f.preview));
    };

    render() {
        console.log(this.state.accepted);
        const { rejected } = this.state;
        return (
            <NativeDropzone
                disableClick
                ref={this.dropRef}
                className={style.dropzone}
                activeClassName={style.dropzoneActive}
                acceptClassName={style.dropzoneAccepted}
                rejectClassName={style.dropzoneRejected}
                accept="image/jpeg, image/png"
                onDrop={(accepted, rejected) => {
                    this.setState({
                        accepted: accepted.map(acc => ({
                            ...acc,
                            preview: URL.createObjectURL(acc),
                        })),
                        rejected,
                    });
                }}
            >
                <div className={style.title}>
                    {rejected.length > 0 ? (
                        <div>Wrong image format</div>
                    ) : (
                        <div>
                            <span
                                className={style.select}
                                onClick={() => this.dropRef.current.open()}
                            >
                                Select
                            </span>{' '}
                            or Drag and Drop
                        </div>
                    )}
                </div>
            </NativeDropzone>
        );
    }
}

export default Dropzone;

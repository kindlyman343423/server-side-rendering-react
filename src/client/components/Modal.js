import React, {Component} from 'react'

export class Modal extends Component{

    closeModal(id) {
        document.getElementById(id).style.display = 'none'
    }

    render(){
        return(
            <div className="backdrop-modal" id={this.props.id} >
                <div className="modal">
                    <div className="modal-header">{this.props.title}
                        <span className="close" onClick={() => this.closeModal(this.props.id)}>
                            <i className="remixicon-close-line" />
                        </span>
                    </div>
                    <div className="modal-body">
                        {this.props.children}
                    </div>
                    <div className="modal-footer">
                        <button className="btn clear-btn" onClick={() => this.closeModal(this.props.id)}>Cancel</button>
                        <button className="btn primary-btn">Ok</button>
                    </div>
                </div>
            </div>
        )
    }
}

export class ModalButton extends Component{
    
    openModal(id) {
        document.getElementById(id).style.display = 'block'
    }
    
    render(){
        return(
            <button className="btn primary-btn" onClick={() => this.openModal(this.props.id)}>{this.props.text}</button>
        )
    }
}
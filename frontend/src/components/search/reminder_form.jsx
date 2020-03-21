import React from 'react';
import './reminder_form.css';

class ReminderForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: '',
            demoParent: [{firstName:"", lastName:"", mobile:""}]
        }

        // *START line prevents error out when not loading page
        this.props.location.state = this.props.location.state ? this.props.location.state : this.props.location.state = { users: { filteredParentsArr: []}, adminId: "",  }
        // * END

        this.alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUV!@#$%^&*()-+"
        this.parentsArr = this.props.location.state.users.filteredParentsArr;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.demoParentSubmit = this.demoParentSubmit.bind(this);
        this.authorId = this.props.history.location.state.adminId.userAdminId;

        this.parentIds = [];
        this.parentMobileArr = [];
        for (let index = 0; index < this.parentsArr.length; index++) {
            let parentId = this.parentsArr[index][0]._id;
            //only add unique parent Ids to parentIds array
            if (!this.parentIds.includes(parentId)) {
                this.parentIds.push(parentId);
            }

            //only add unique parent Ids to parentMobileArr array
            let parentNumber = this.parentsArr[index][0].mobile;
            if (!this.parentMobileArr.includes(parentNumber)) {
                this.parentMobileArr.push(`+1${parentNumber}`);
            }


            // check if parentMobileArr is // this.parentMobileArr = ["+1234567890, +17654357890", ...]

        }
    }

    handleSubmit(e) {
        e.preventDefault();

        this.props.history.location.state.createReminder.createReminder({ title: this.state.title, body: this.state.body, authorId: this.authorId, parentId: this.parentIds, parentMobileArr: this.parentMobileArr});

        // Danny's Desire (this line below will only work once the reminder backend is updated): 
        // this.props.history.location.state.createReminder.createReminder({title: this.state.title, body: this.state.body, authorId: this.authorId, parentId: this.parentIds, parentMobileArr: this.parentMobileArr});

        //redirect to main page
        this.props.history.push("/");
      }

    update(field) {
        return e => {
            this.setState({ [field]: e.target.value })
        }
    }


    demoParentSubmit(e) {
        e.preventDefault();

        let demoParentMobile = this.state.demoParent[0].mobile;
        let allNumbers = true;
        for (let index = 0; index < this.alphabet.length; index++) {
            let char = this.alphabet[index];
            if (demoParentMobile.includes(char)) {
                allNumbers = false;
            }
        }

        if (this.parentMobileArr.includes(this.state.demoParent[0].mobile)) {
            alert("that number is already in the list of parents to receive a text");
        } else if (this.state.demoParent[0].mobile.length !== 10) {
            alert("please enter a ten digit number including area code, ex: '4153227890'");
        } else if (allNumbers === false) {
            alert("please enter only numbers")
        } else {
            this.parentsArr.push(this.state.demoParent);
            this.parentMobileArr.push(`+1${this.state.demoParent[0].mobile}`);
        }

        // need to force hacky re-render again in order for new demo parent and number to appear in list at bottom of this component.  Next line sets a part of state to what its value already was (not changing state but forcing re-render)
        this.setState({ demoParent: [{ firstName: "Demo", lastName: "User", mobile: this.state.demoParent[0].mobile }] })
    }   

    updateDemoMobile(e) {
        return e => {
            this.setState({ demoParent: [{ firstName: "Demo", lastName: "User", mobile: e.target.value }] })

        };
    }

    render () {
        return (
            <div id='reminderForm'>
                <h2 className="reminderFormTitle">Draft and send your text reminder</h2>
                <div className="reminderFormContent">
                    <form className="reminderSubmitForm" onSubmit={this.handleSubmit}>
                        <label>Title
                            <input placeholder="potluck reminder" type="text" className='title' onChange={this.update('title')} />
                        </label>
                        <label> Body
                            <input placeholder="we have a potluck on thursday, please bring a dish to share" type="textarea" className='body' onChange={this.update('body')} />
                        </label>
                        <button className="sendReminderButton" type='submit'>Send Reminder</button>
                    </form>

                    <form className="demoSubmitForm" onSubmit={this.demoParentSubmit}>
                        <title className="demoSubmitTitle">Add your cell phone number to add your number to "Parents" list</title>
                        <input type="text" placeholder="4567894567 (US numbers only)" value={this.state.demoMobile} onChange={this.updateDemoMobile()} />
                        <button className="demoSubmitButton" type="submit">Add My Number for Demo</button>
                    </form>

                    <div className="recipientsList">
                        <title className="recipientListTitle">Parents - Text Recipient List</title>
                        <ul>
                            {/* opportunity for improvement: fetch all Students on component did mount and show the student associated with each parent in this list */}
                            {this.parentsArr.map((parent, idx) => {
                                // this for loop below checks if the parent is a duplicate and if so, doesn't show it in the recipient list to the user
                                let dupe = false;
                                for (let index = 0; index < idx; index++) {
                                    if (this.parentsArr.slice(0, idx)[index][0]._id === parent[0]._id) {
                                        dupe = true;
                                    }
                                }
                                
                                if (parent[0].firstName === "Demo" && parent[0].lastName === "User") {
                                    return <li key={`${idx}`} className="demoParent">
                                        {/* we could make these links to parent show page */}
                                        <div className="parentName">{parent[0].firstName} {parent[0].lastName}</div>
                                        <div className="parentNumber">{"+1 " + parent[0].mobile.slice(0, 3) + "-" + parent[0].mobile.slice(3, 6) + "-" + parent[0].mobile.slice(6, 10)}</div>
                                    </li>
                                }

                                if (dupe === false) {
                                    return <li key={`${idx}`}>
                                        {/* we could make these links to parent show page */}
                                        <div className="parentName">{parent[0].firstName} {parent[0].lastName}</div>
                                        <div className="parentNumber">{"+1 " + parent[0].mobile.slice(0, 3) + "-" + parent[0].mobile.slice(3, 6) + "-" + parent[0].mobile.slice(6, 10)}</div>
                                    </li>
                                }
                                return true
                            })}    
                        </ul>
                    </div>
                </div>
            </div> 
        )
    }
}

export default ReminderForm;
import React from 'react';
import './reminder_form.css';

class ReminderForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: '',
            demoParent: [{ firstName: "", lastName: "", mobile: "" }],
            parentIds: [],
            parentMobileArr: [],
            parentsArr: []
        }

        // *START line prevents error out when not loading page
        this.props.location.state = this.props.location.state ? this.props.location.state : this.props.location.state = { users: { filteredParentsArr: [] }, adminId: "", }
        // * END

        this.alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUV!@#$%^&*()-+"
        this.handleSubmit = this.handleSubmit.bind(this);
        this.demoParentSubmit = this.demoParentSubmit.bind(this);
        this.authorId = this.props.adminUser[0].id;
        this.parentsIdArr = this.props.students.map(ele => ele.parentId[0])
        this.users = this.props.users;
        this.students = this.props.students;
        this.recipientsMobileArr = this.props.location.state.users.filteredParentsArr;
    }

    componentDidMount() {
        this.setState ({
            title: '',
            body: '',
            demoParent: [{ firstName: "", lastName: "", mobile: "" }],
            parentIds: [],
            parentMobileArr: [],
            parentsArr: []
        })
    };

    handleSubmit(e) {
        debugger
        e.preventDefault();
                
        function noDups(arr) {

          // // array of all student ids
          // let studentIds = arr.map(ids => ids._id);
          // // arrray of all unique ids (no dups)
          // let uniqueIds = studentIds.filter((ids, index) => studentIds.indexOf(ids) >= index);
          let uniqueIds = [];
          let noDuplicates = [];

          for (let i = 0; i < arr.length; i++) {
            let dupCheck = arr[i]

            if (!uniqueIds.includes(dupCheck)) {
              uniqueIds.push(dupCheck)
              noDuplicates.push(dupCheck)
            }
          }

          return noDuplicates
        }

        let noDupesParentIds = noDups(this.state.parentIds);
        let noDupesParentMobileArr = noDups(this.state.parentMobileArr);

        this.props.createReminder({
            title: this.state.title,
            body: this.state.body,
            authorId: this.authorId,
            parentIds: noDupesParentIds,
            parentMobileArr: noDupesParentMobileArr
        });

        alert("Your reminder SMS message was sent!");

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
        for (let i = 0; i < this.alphabet.length; i++) {
            let char = this.alphabet[i];
            if (demoParentMobile.includes(char)) {
                allNumbers = false;
            }
        }
        
        if (this.state.parentMobileArr.includes(this.state.demoParent[0].mobile)) {
            alert("that number is already in the list of parents to receive a text");
        } else if (this.state.demoParent[0].mobile.length !== 10) {
            alert("please enter a ten digit number including area code, ex: '4153227890'");
        } else if (allNumbers === false) {
            alert("please enter only numbers")
        } else {
            this.state.parentsArr.push(this.state.demoParent[0]);
            this.state.parentMobileArr.push(`+1${this.state.demoParent[0].mobile}`);
        }
        
        // need to force hacky re-render again in order for new demo parent and number to appear in list at bottom of this component.  Next line sets a part of state to what its value already was (not changing state but forcing re-render)
        this.setState({ demoParent: [{ firstName: "Demo", lastName: "User", mobile: this.state.demoParent[0].mobile }] })
    }

    updateDemoMobile(e) {
        return e => {
            this.setState({ demoParent: [{ firstName: "Demo", lastName: "User", mobile: e.target.value }] })

        };
    }

    render() {

        let parentIdCheck = []
        for (let i = 0; i < this.parentsIdArr.length; i++) {
            if (!parentIdCheck.includes(this.parentsIdArr[i])) {
                this.state.parentIds.push(this.parentsIdArr[i])
                parentIdCheck.push(this.parentsIdArr[i])
            }
        }

        let mobileCheck = []
        this.users.forEach(each => {
            if (parentIdCheck.includes(each._id) && !mobileCheck.includes(each.mobile)) {
                this.state.parentMobileArr.push(`+1${each.mobile}`);
                mobileCheck.push(`+1${each.mobile}`);
                this.state.parentsArr.push(each);
            }
        })
        return (
            <div id='reminderForm'>
                <h2 className="reminderFormTitle">Draft and send your text reminder</h2>
                <div className="reminderFormContent">
                    <form className="reminderSubmitForm" onSubmit={this.handleSubmit}>
                        <label>Title
                            <input placeholder="Must be between 5 to 50 characters." type="text" className='title' onChange={this.update('title')} />
                        </label>
                        <label> Body
                            <input placeholder="Must be between 5 to 50 characters." type="textarea" className='body' onChange={this.update('body')} />
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
                            {this.state.parentsArr.map((parent, idx) => {
                                // this for loop below checks if the parent is a duplicate and if so, doesn't show it in the recipient list to the user
                                let dupe = false;
                                for (let i = 0; i < idx; i++) {
                                    if (parentIdCheck.includes(parent._id)) {
                                        dupe = true;
                                    }
                                }

                                if (parent.firstName === "Demo" && parent.lastName === "User") {
                                    return <li key={`${idx}`} className="demoParent">
                                        {/* we could make these links to parent show page */}
                                        <div className="parentName">{parent.firstName} {parent.lastName}</div>
                                        <div className="parentNumber">{"+1 " + parent.mobile.slice(0, 3) + "-" + parent.mobile.slice(3, 6) + "-" + parent.mobile.slice(6, 10)}</div>
                                    </li>
                                }

                                if (dupe === false) {
                                    return <li key={`${idx}`}>
                                        {/* we could make these links to parent show page */}
                                        <div className="parentName">{parent.firstName} {parent.lastName}</div>
                                        <div className="parentNumber">{"+1 " + parent.mobile.slice(0, 3) + "-" + parent.mobile.slice(3, 6) + "-" + parent.mobile.slice(6, 10)}</div>
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
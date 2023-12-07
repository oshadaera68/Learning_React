import './App.css';

const user1={
    avatar:'https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcR2dgLtDgjkCaYbQ4dM1_ChDGn099lViVzaT5ieUhkow-XQLoi8uxGY-WpmY8TiWXDFpWq84hi0k2PIAgQ',
    name:'samantha Gamage',
    designation:'Java Developer',
    salary:15000
}
const user2={
    avatar:'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRb3j_Y7ZdB_0cQdKuSiY-XgrncZk0z6i6cak4iCVGUk5V_0Qwc',
    name:'Nihal Jayashantha',
    designation:'Php Developer',
    salary:30000
}
const user3={
    avatar:'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRoPQCPChHOPU7VGkkTPnu9nGqmnrr12_4J50QLLHZYQ37x0J50',
    name:'Wasantha nanayakkara',
    designation:'Angular Developer',
    salary:60000
}
const user4={
    avatar:'https://img.ilcdn.fi/__CO_Ff9mb-vFR1DpP54PiyEKVw=/full-fit-in/920x0/img-s3.ilcdn.fi/abf2dbe6365bece34369b0e63dbf8ed21436002f85ebc4b12605871ea58a8034.jpg',
    name:'Shehan Sandeepa',
    designation:'React Developer',
    salary:50000
}


function UserManager() {
    return(
        <div className='wrapper'>
        <User avatar={user1.avatar}
              name={user1.name} designation={user1.designation} salary={user1.salary} />
        <User avatar={user2.avatar}
              name={user2.name} designation={user2.designation} salary={user2.salary}/>
        <User avatar={user3.avatar}
              name={user3.name} designation={user3.designation} salary={user3.salary}/>
        <User avatar={user4.avatar}
              name={user4.name} designation={user4.designation} salary={user4.salary}/>
        </div>
    );
}

const User = (props)=>{
    const {avatar, name, designation, salary} = props;
    return(
        <div className='user-outer'>
            <Avatar avatar={avatar}/>
            <UserData name={name} designation={designation}
                      salary={salary}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </UserData>
        </div>
    );
}

const Avatar = ({avatar})=>{
    return(
        <div className='avatar-outer'>
            <img src={avatar}
                 alt="Samuel L. Jackson"/>
        </div>
    )
}

const UserData = ({name,designation,salary,children})=>{
    console.log(children)
    return(
        <div className='user-data'>
            <UserName name={name}/>
            <Designation designation={designation}/>
            <Salary salary={salary}/>
            <p>
                {children}
            </p>
        </div>
    )
}

const UserName = ({name})=>{
    const inlineStyle={
        color:'#2980b9'
    }
    return(
        <h1 style={inlineStyle}>{name}</h1>
    )
}

const Designation = ({designation})=>{
    return(
        <h3 style={{fontStyle:'italic'}}>{designation}</h3>
    )
}

const Salary = ({salary})=>{
    return(
        <h3 style={{fontStyle:'italic'}}>{salary}</h3>
    )
}



export default UserManager;
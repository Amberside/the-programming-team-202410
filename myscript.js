var imageList = [
    "a.png",
    "b.png",
    "c.png",
    "d.png",
    "e.png",
    "f.png",
    "g.png",
    "h.png",
    "i.png",
    "j.png",
    "k.png",
    "l.png",
    "m.png",
    "n.png",
    "o.png",
    "p.png",
    "q.png",
    "r.png",
    "s.png",
    "t.png",
    "u.png",
    "v.png",
    "w.png",
    "x.png",
    "y.png",
    "z.png",
    "aa.png",
    "ab.png",
    "ac.png",
    "ad.png",
    "ae.png",
    "af.png",
    "ag.png",
    "ah.png",
    "ai.png",
    "aj.png",
    "ak.png",
    "al.png",
    "am.png",
    "an.png",
    "ao.png"
];
var students =
[
    {
        "path": "amberle",
        "lastName": "Seidl",
        "firstName": "Amberle"
    },
    {
        "path": "bob",
        "lastName": "Blanchett",
        "firstName": "Bob"
    },
    {
        "path": "cameron",
        "lastName": "Muschialli",
        "firstName": "Cameron"
    },
    {
        "path": "Deepthi",
        "lastName": "Kalidindi",
        "firstName": "Deepthi"
    },
    {
        "path": "Ken",
        "lastName": "Kwathai",
        "firstName": "Rachakhet"
    },
    {
        "path": "Li",
        "lastName": "Wang",
        "firstName": "Li"
    },
    
    {
        "path": "Evelyn",
        "lastName": "Zammit",
        "firstName": "Evelyn"
    },
    {
        "path": "joel_b",
        "lastName": "Bilo",
        "firstName": "Joel Jr"
    },
    

   ];

const maxColor = 15;
const maxClip = 10;
const maxImage = imageList.length + 1;
students.forEach((student, index) => {
    student.fullName = `${student.firstName} ${student.lastName}`;
    student.initial = student.fullName.split(' ').reduce((acc, subname) => acc + subname[0], '');
    student.color = `color-${(index % maxColor + 1).toString()}`;
    student.clip = `clip-${(index % maxClip + 1).toString()}`;
    student.image = `${imageList[index % maxImage]}`;
});
var studentList = new StudentList("all-students", students);

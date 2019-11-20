const arbre = {
  GL: [
    [([], [])],
    [
      [
        ["GL.3.1.1", "GL.3.1.2", "GL.3.1.3"],
        ["GL.3.2.1", "GL.3.2.2"],
        ["GL.3.3.1", "GL.3.3.2"],
        ["GL.3.4.1", "GL.3.4.2", "GL.3.4.3"],
        ["GL.3.5.1", "GL.3.5.2"],
        ["GL.3.6.1", "GL.3.6.2"],
        ["GL.3.7.1"],
        ["GL.3.8.1", "GL.3.8.2"]
      ],
      [[], [], [], [], [], [], [], []]
    ],
    [[], []]
  ]
};

class Element {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
}

const elements = [
  new Element("GL.3.1.1", "Méthodologoe de développement des SI"),
  new Element("GL.3.1.2", "Génie logiciel"),
  new Element("GL.3.1.3", "Projet SI & BD"),
  new Element("GL.3.2.1", "Compilation"),
  new Element("GL.3.2.2", "Projet de compilation"),
  new Element("GL.3.3.1", "Modélisation objet"),
  new Element("GL.3.3.2", "Programmation objet avancée"),
  new Element("GL.3.4.1", "Réseaux TCP/IP"),
  new Element("GL.3.4.2", "Programmation réseau"),
  new Element("GL.3.4.3", "Administration UNIX"),
  new Element("GL.3.5.1", "Statistique et échantillonnage"),
  new Element("GL.3.5.2", "Analyse de données"),
  new Element("GL.3.6.1", "Conception et développement XML"),
  new Element("GL.3.6.2", "Ingénierie du Web"),
  new Element("GL.3.7.1", "Culture entrepreneuriale & PCE"),
  new Element("GL.3.8.1", "Communication de groupe"),
  new Element("GL.3.8.2", "Business English I")
];

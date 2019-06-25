const text = new Blotter.Text('DROZERAH',{
    family: "'Just Another Hand', cursive",
     size : 200,
     fill : "#000",
     paddingLeft: 80,
     paddingRight: 80,
     paddingTop: 80,
     paddingBottom: 80,
 })

 const material = new Blotter.FliesMaterial()
 material.uniforms.uPointCellWidth.value = 0.008
 material.uniforms.uPointRadius.value = 0.89
 material.uniforms.uSpeed.value = 12

const blotter = new Blotter(material, { texts : text })

const scope = blotter.forText(text)

 scope.appendTo(document.body)
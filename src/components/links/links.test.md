it('This emotion style', () => {

  // create an instance of the Link component with page and child text
 

  // create a data snapshot of the component
  const tree = renderer.create(linkInstance).toJSON()

  // compare the sata to the last snapshot
  expect(tree).toMatchSnapshot()
})
export default async function DaisyuiDemoPage() {
  return (
    <div className="container pt-16">
      <h1 className="text-5xl">DaisyUI Demo Page</h1>
      <div className="dui-collapse dui-collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-1" defaultChecked />
        <div className="dui-collapse-title text-xl font-medium">Click to open this one and close others</div>
        <div className="dui-collapse-content">
          <p>hello</p>
        </div>
      </div>
      <div className="dui-collapse dui-collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-1" />
        <div className="dui-collapse-title text-xl font-medium">Click to open this one and close others</div>
        <div className="dui-collapse-content">
          <p>hello</p>
        </div>
      </div>
      <div className="dui-collapse dui-collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-1" />
        <div className="dui-collapse-title text-xl font-medium">Click to open this one and close others</div>
        <div className="dui-collapse-content">
          <p>hello</p>
        </div>
      </div>
    </div>
  );
}
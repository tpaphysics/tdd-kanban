<div align="center">
<img src="https://img.shields.io/badge/Yarn-2C8EBB?style=for-the-badge&logo=yarn&logoColor=white" alt="Yarn" />

<img src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E" alt="vite"/>

<img src="https://img.shields.io/badge/Vitest-729B1B?style=for-the-badge&logo=vitest&logoColor=FFD62E" alt="vitest"/>

<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"  alt="React" />

<img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="Typescript" />
<img src="https://img.shields.io/badge/Chakra--UI-319795?style=for-the-badge&logo=chakra-ui&logoColor=white" alt="Chakra-ui" />
</div>
<br/>
<br/>

## **🌐 Website**

Deploy on vercel:
[http://tdd-kanban.vercel.app/](http://tdd-kanban.vercel.app/)

## **💻 Project**

<p align="center">
<img src="./public/app1.gif" alt="desktop-app" width="800px"/>
</p>

<p align="center">
<img src="./public/app2.gif" alt="desktop2-app" width="800px"/>
</p>

<p align="center">
<img src="./public/app3.gif" alt="desktop3-app" width="800px"/>
</p>

This **tdd Kanban** project was developed as an exercise to develop TDD architecture skills in frontend development. The layout in figma is [here](https://www.figma.com/file/a1Bwfmkw5w2BOdsV4PIeDy/Kanban-Board?node-id=0%3A1). We created a design pattern with the following structure:

<p align="center">
<img src="./public/struct.png" alt="tree"/>
</p>

Each component that has react state has a hook folder to separate the business rules from the TSX component. That way, we were able to test hooks with [React Testing Library](https://react-hooks-testing-library.com/).

Each component has its own hook with its use cases.

[**_useEditableCard.ts_**](https://github.com/tpaphysics/tdd-kanban/blob/main/src/Components/EditableCard/hook/useEditableCard.ts)

```tsx
export const useEditableCard = (initialCard: ICard) => {
  const { column } = useColumn();
  const { list, removeCard } = useList();
  const { handleUpdateTask, handleUpdateFinished } = useKanban();

  const [finished, setFinished] = useState(initialCard.finished);
  const inputRef = useRef<HTMLInputElement>({} as HTMLInputElement);
  ... //more states

  const handleClickTag = useCallback(() => {
    ... //logic
  }, []);

  ...//more functions

  return {
    ... // more
    handleClickTag,
    handleEditTask,
    handleClickCheck,
    handleRemoveCard,
    handleClickCloseEdit,
  };
};
```

Then the hook is tested in its own file

[**_useEditableCard.test.tsx_**](https://github.com/tpaphysics/tdd-kanban/blob/main/src/Components/EditableCard/hook/useEditableCard.test.tsx)

```tsx
describe('useEditableCard hook test', () => {

  const wrapper = ({ children }: BoxProps) => (
    ... //logic
  );

  const mockedUseList = vi
    .spyOn(useList, 'useList')
    .mockImplementation(
      () => ({ list: mockedList, AddCard: vi.fn(), removedCard: vi.fn() } as any),
    );
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it('should be false the finished state by default', () => {
    const { result } = renderHook(() => useEditableCard(mockedCard), { wrapper });
    act(() => {
      result.current.finished;
    });
    expect(result.current.finished).toEqual(true);
  });
  ... //more tests
});
```

The hook is imported into the component and its states and functions are consumed by the component.

[**_📝 index.tsx_**](https://github.com/tpaphysics/tdd-kanban/blob/main/src/Components/EditableCard/index.tsx)

```tsx
function EditableCard({ card, cardIndex }: EditableCardsProps) {
  const {
    ...//more
    handleClickTag,
    handleEditTask,
    handleClickCheck,
    handleClickCloseEdit,
    handleRemoveCard,
  } = useEditableCard(card);

  return (
    ... //useEditableCard consumption
  )
}

export default EditableCard;
```

Finally, tests are performed that simulate user actions on the component:

[**_EditableCard.test.tsx_**](https://github.com/tpaphysics/tdd-kanban/blob/main/src/Components/EditableCard/EditableCard.test.tsx)

```tsx
describe('EditableCard.tsx test', () => {

  const ContainerTest = () => (
   ... //logic
  );

  it('Should finished tag not to be in component', () => {
    const { getByText, debug } = render(<ContainerTest />);
    debug();
    expect(getByText('Finished')).toBeInTheDocument();
  });

  it('Should it added finished when click in tag', () => {
    const { getByTestId, getByText } = render(<ContainerTest />);
    fireEvent.click(getByTestId(`tag-${mockedCard.id}`));
    expect(() => getByText('Finished')).toThrow();
  });

  ...//more tests
});
```

This way we can test each component part separately.

All the kanban movement logic is in the [onDragEnd](https://github.com/tpaphysics/tdd-kanban/blob/main/src/Hooks/useKanban/Provider/hook/useKanbanProvider.ts) function.

## **💥 Considerations**

Front end tests help standardize and minimize errors and improve user experience. It makes the work easier and contributes to a scalable and quality final solution.

## Get Started

```bash
yarn && yarn vite
```

## 🛠️ Test

```bash
yarn test
```

## **👨‍🚀 Author**

<a href="https://github.com/tpaphysics">
<img alt="Thiago Pacheco" src="https://images.weserv.nl/?url=avatars.githubusercontent.com/u/46402647?v=4?v=4&h=300&w=300&fit=cover&mask=circle&maxage=7d" width="100px"/>
  <br />
  <sub>
    <b>Thiago Pacheco de Andrade</b>
  </sub>
</a>
<br />

👋 My contacts!

[![Linkedin Badge](https://img.shields.io/badge/-LinkedIn-blue?style=for-the-badge&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/thiago-pacheco-200a1a86/)](https://www.linkedin.com/in/thiago-pacheco-200a1a86/)
[![Gmail Badge](https://img.shields.io/badge/-Gmail-c14438?style=for-the-badge&logo=Gmail&logoColor=white&link=mailto:physics.posgrad.@gmail.com)](mailto:physics.posgrad.@gmail.com)

## **📝 License**

This project has an MIT [license](LICENSE.md).

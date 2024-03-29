import type { Meta, StoryObj } from '@storybook/react'
import { Task } from 'features/todolistLists/ui/tasks/task/task'
import { TaskPriorities, TaskStatuses } from 'common/enums'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Task> = {
  title: 'TODOLISTS/task',
  component: Task,

  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // changeTaskStatus: {
    //   action: 'clicked changeTaskStatus',
    // },
    // changeTaskTitle: {
    //   action: 'clicked changeTaskTitle',
    // },
  },
  args: {
    // changeTaskStatus: action('changeTaskStatus'),
    // changeTaskTitle: action('changeTaskStatus'),
    // removeTask: action('changeTaskStatus'),
    task: {
      id: 'qwrSasha11',
      title: 'Sasha',
      status: TaskStatuses.Completed,
      todoListId: 'todolistId2',
      description: '',
      startDate: '',
      deadline: '',
      order: 0,
      priority: TaskPriorities.Low,
      addedDate: '',
    },
    // todolistId: 'wer235',
  },
}

export default meta
type Story = StoryObj<typeof Task>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const TaskIsDoneStory: Story = {}
export const TaskNotIsDoneStory: Story = {
  args: {
    task: {
      id: 'qwrSasha113',
      title: 'Ne Sasha',
      status: TaskStatuses.Completed,
      todoListId: 'todolistId2',
      description: '',
      startDate: '',
      deadline: '',
      order: 0,
      priority: TaskPriorities.Low,
      addedDate: '',
    },
  },
}

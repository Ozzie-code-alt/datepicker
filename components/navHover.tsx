"use client"

import * as React from "react"
import Modal from "react-modal"

import { cn } from "@/lib/utils"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
]

export function NavigationMenuDemo({ isOpen, onClose, field}) {
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose}   style={{
        content: {
          width: '500px',  // Width of the modal
          height: '500px', // Height of the modal
          margin: 'auto'   // Centers the modal
        }
      }} >
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                   
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Schedule Your Appointment With Promises
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                    Snap SNap Pic pic wow good pic wow
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem title="9 am" onClick={()=>{field.onChange("9AM"); onClose() }}>
                Schedule it for 9 am ?
              </ListItem>
              <ListItem  title="10 am"onClick={()=>{field.onChange("10AM"); onClose() }}>
              Schedule it for 10 am ?
              </ListItem>
              <ListItem  title="11 am"onClick={()=>{field.onChange("11AM"); onClose() }}>
              Schedule it for 11 am ?
              </ListItem>
              <ListItem  title="2 pm"onClick={()=>{field.onChange("2PM"); onClose() }}>
              Schedule it for 2 pm ?
              </ListItem>
              <ListItem  title="3 pm" onClick={()=>{field.onChange("3PM"); onClose() }}>
              Schedule it for 3 pm ?
              </ListItem>
            </ul>
        </NavigationMenuItem>

      </NavigationMenuList>
    </NavigationMenu>
    </Modal>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
    
  )
})
ListItem.displayName = "ListItem"

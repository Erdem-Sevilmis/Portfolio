abstract class WebsiteVisitor(val name: String) {
    abstract fun greet()
}

interface PortfolioViewer {
    fun viewPortfolio()
    fun support(amount: Int) = println("Thank you for your support! Here's $amount bucks!")
}

class PortfolioVisitor(name: String, val interest: String) : WebsiteVisitor(name), PortfolioViewer {
    fun explore() = println("I'm interested in $interest.")
    override fun viewPortfolio() = println("Exploring the portfolio...")
    override fun greet() = println("Hello, it's $name here.")
}

fun main() {
    val user = PortfolioVisitor("User123", "Web Development")
    user.greet()          
    user.explore()
    user.viewPortfolio()
    user.support(20)
}

from menus.base import NavigationNode
from menus.menu_pool import menu_pool
from django.utils.translation import ugettext_lazy as _
from cms.menu_bases import CMSAttachMenu

class TestMenu(CMSAttachMenu):

    name = _("test menu")

    def get_nodes(self, request):
        nodes = []
        n1 = NavigationNode(_('Epica Model'), "#Epica_Model", 1)
        n2 = NavigationNode(_('About Us'), "#About_Us", 2)
        n3 = NavigationNode(_('Technology Capital'), "#Technology_Capital", 3)
        n4 = NavigationNode(_('The Right Fit'), "#Video", 3)
        n5 = NavigationNode(_('Contact Us'), "#Contact_Us", 3)
        
        nodes.append(n1)
        nodes.append(n2)
        nodes.append(n3)
        nodes.append(n4)
        nodes.append(n5)
        
        return nodes

menu_pool.register_menu(TestMenu)